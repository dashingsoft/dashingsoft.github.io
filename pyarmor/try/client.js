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
    resultModal.querySelector('.modal-footer > button:nth-child(2)').classList.add('d-none')

    taskId = 0
    taskStatus = 2
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
    const url = webapi
    const scriptName = document.getElementById('scriptName').value
    const pyver = document.getElementById('pythonVersion').value
    const content = document.getElementById('scriptContent').value

    const data = {
        script: scriptName,
        pyver: pyver,
        source: content,
        target: target,
    }

    const onsuccess = (task) => {
        taskId = task.id
        taskStatus = task.status
        if (taskStatus == 2)
            on_start_build()
        else
            on_task_error('${taskStatus}')
    }

    send_request('GET', url, data, onsuccess, on_task_error)
}

const make_url = (method, url, data) => {
    if (method === "GET" && data) {
        const paras = []
        for (const prop in data)
            paras.push(`${prop}=${data[prop]}`)
        return `${url}?${paras.join('&')}`
    }
    return url
}

const on_task_error = (errmsg) => {
    taskStatus = 20
    on_server_error(errmsg)
}

const send_request = (method, url, data, onsuccess, onerror) => {

    const req = new Request(make_url(method, url, data))
    const headers = new Headers()

    // 只是为了开发测试使用, admin 用户和密码
    // 'WWW-Authenticate': 'Basic YWRtaW46YWRtaW4='

    // flyuser 用户的密码 "(thxjv!t8-F9*9j!q=)"
    const username = `flyuser-pyarmor`
    const basicauth = btoa(`${username}:(thxjv!t8-F9*9j!q=)`)
    // headers.append('Authorization', `Basic ${basicauth}`)
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=')

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
            onsuccess(data)
        })

        .catch((err) => {
            console.log(err)
            onerror(err)
        })
}


const request_download = (onsuccess, onerror) => {
    const headers = new Headers()
    const username = `flyuser-pyarmor`
    const basicauth = btoa(`${username}:(thxjv!t8-F9*9j!q=)`)
    headers.append('Authorization', `Basic ${basicauth}`)
    headers.append("Content-Type", "application/json")

    const url = webapi
    const body = JSON.stringify({
        pk: taskId,
        action: "download",
    })
    const method = "POsT"
    const options = {
        mode: "cors",
        headers: headers,
        method: method,
        body: body,
    }

    fetch(url, options)

        .then((response) => {
            if (!response.ok) {
                throw new Error(`${response.status}`)
            }
            return response.blob()
        })

        .then((response) => {
            const href = URL.createObjectURL(response)
            onsuccess(href)
        })

        .catch((err) => onerror(err))
}

const download_script = (script) => {
    const onsuccess = (href) => {
        const a = document.createElement('a')
        a.href = href
        a.setAttribute('download', `${script}`)
        a.click()
        URL.revokeObjectURL(href)
    }
    request_download(onsuccess, on_task_error)
}

const query_task = () => {
    const url = webapi
    const data = {
        pk: taskId,
        action: 'query',
    }

    const onsuccess = (task) => {
        taskId = task.id
        taskStatus = task.status
        if (taskStatus == 10) {
            resultModal.querySelector('.modal-footer > button:nth-child(3)').classList.remove('d-none')
        }
        else if (taskStatus > 10) {
            on_task_error('${taskStatus}')
        }
        else if (taskStatus != 2) {
            on_task_error('${taskStatus}')
        }
    }

    send_request('GET', url, data, onsuccess, on_task_error)
}

const count_time = () => {
    elapseSeconds += 1
    document.getElementById('worktime').innerHTML = `${elapseSeconds}`
    if (taskStatus == 2) {
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
        start_build(target)
    })

    resultModal.addEventListener('hidden.bs.modal', event => {
        if (taskStatus == 2) {
            const modal = new bootstrap.Modal(confirmModal)
            modal.show()
        }
    })

    resultModal.querySelector('.modal-footer > button:nth-child(2)').addEventListener('click', event => {
        download_script(document.getElementById('scriptName').value)
    })
}

if (confirmModal) {
    confirmModal.querySelector('.modal-footer > button:nth-child(2)').addEventListener('click', event => {
        taskStatus = 22
    })
}
