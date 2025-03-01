let taskId = 0
let taskStatus = 0
let elapseSeconds = 0

const webapi = 'http://192.168.121.108:8000/api/r1/tasks/try_pyarmor/'

const resultModal = document.getElementById('resultModal')
const confirmModal = document.getElementById('confirmModal')

const on_start_build = () => {
    resultModal.querySelector('.modal-body > div.alert:nth-child(1)').classList.remove('d-none')
    resultModal.querySelector('.modal-body > div.alert:nth-child(2)').classList.add('d-none')
    resultModal.querySelector('.modal-body > div.alert:nth-child(3)').classList.add('d-none')

    taskId = 0
    taskStatus = 0
    elapseSeconds = 0
    count_time()
}

const on_server_error = (errmsg) => {
    resultModal.querySelector('.modal-body > div.alert:nth-child(1)').classList.add('d-none')
    resultModal.querySelector('.modal-body > div.alert:nth-child(2)').classList.remove('d-none')
    resultModal.querySelector('.modal-body > div.alert:nth-child(3)').classList.add('d-none')
    document.getElementById('errmsg').innerHTML = errmsg
}

const start_build = (target) => {
    const scriptName = document.getElementById('scriptName').value
    const pyver = document.getElementById('pythonVersion').value
    const content = document.getElementById('scriptContent').value
    if (!content) {
        on_task_error(msgdata.empty_script)
        return
    }

    const paras = {
        script: scriptName,
        pyver: pyver,
        target: target,
    }
    const url = make_url(webapi, paras)

    const onsuccess = (task) => {
        taskId = task.id
        taskStatus = task.state
        if (taskStatus >= 10) {
            query_task()
        }
    }

    send_request('POST', url, content, onsuccess, on_task_error)
}

const make_url = (url, data) => {
    const paras = []
    for (const prop in data)
        paras.push(`${prop}=${data[prop]}`)
    return `${url}?${paras.join('&')}`
}

const on_task_error = (errmsg) => {
    taskStatus = 20
    on_server_error(errmsg)
}

const send_request = (method, url, data, onsuccess, onerror) => {

    const req = new Request(url)
    const headers = new Headers()

    // 只是为了开发测试使用, admin 用户和密码
    // 'WWW-Authenticate': 'Basic YWRtaW46YWRtaW4='
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=')

    // flyuser 用户的密码 "(thxjv!t8-F9*9j!q=)"
    // const username = `flyuser-pyarmor`
    // const basicauth = btoa(`${username}:(thxjv!t8-F9*9j!q=)`)
    // headers.append('Authorization', `Basic ${basicauth}`)
    // headers.append("Content-Type", "application/octet-stream")

    if (method === 'POST' || method === 'PUT')
        headers.append("Content-Type", "application/json")

    const body = method === 'GET' ? null : JSON.stringify(data)

    fetch(req, {
        method: method,
        mode: "cors",
        headers: headers,
        body: body
    })
        .then((response) => {
            if (response.ok)
                return response.json()
            throw new Error(response.statusText)
        })

        .then((data) => {
            if (data.err) {
                throw new Error(data.errmsg)
            }
            else
                onsuccess(data)
        })

        .catch((err) => {
            onerror(err)
        })
}

const enable_download_link = (data) => {
    const scriptName = document.getElementById('scriptName').value
    const blob = new Blob([data])
    const a = resultModal.querySelector('.modal-body > div.alert:nth-child(3) > a')
    a.href = URL.createObjectURL(blob)
    a.download = scriptName
    resultModal.querySelector('.modal-body > div.alert:nth-child(1)').classList.add('d-none')
    resultModal.querySelector('.modal-body > div.alert:nth-child(2)').classList.add('d-none')
    resultModal.querySelector('.modal-body > div.alert:nth-child(3)').classList.remove('d-none')
}

const query_task = () => {
    if (taskId === 0)
        return

    const paras = {
        pk: taskId
    }
    const url = make_url(webapi, paras)

    const onsuccess = (task) => {
        taskId = task.id
        taskStatus = task.state
        if (taskStatus == 10) {
            enable_download_link(task.data)
        }
        else if (taskStatus > 10) {
            on_task_error(`${taskStatus}`)
        }
        else if (taskStatus != 2 && taskStatus != 0) {
            on_task_error(`${taskStatus}`)
        }
    }

    send_request('GET', url, null, onsuccess, on_task_error)
}

const count_time = () => {
    elapseSeconds += 1
    document.getElementById('worktime').innerHTML = `${elapseSeconds}`
    if (taskStatus < 10) {
        if (elapseSeconds % 5 === 0)
            query_task()
        setTimeout(count_time, 1000)
    }
}

if (resultModal) {
    resultModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const target = button.getAttribute('data-bs-whatever')
        on_start_build()
        start_build(target)
    })

    resultModal.addEventListener('hidden.bs.modal', event => {
        if (taskStatus < 10) {
            const modal = new bootstrap.Modal(confirmModal)
            modal.show()
        }
    })
}

if (confirmModal) {
    confirmModal.querySelector('.modal-footer > button:nth-child(2)').addEventListener('click', event => {
        taskStatus = 22
    })
}
