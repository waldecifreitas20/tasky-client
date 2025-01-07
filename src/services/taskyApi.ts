export interface TaskyApiGetRequest {
  route: string,
  authorization?: string,
}
export interface TaskyApiPostRequest extends TaskyApiGetRequest {
  body?: any;
}
export interface TaskyApiPatchRequest extends TaskyApiPostRequest {}


async function GET(params: TaskyApiGetRequest) {
  return await fetch(`http://localhost:3000/${params.route}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'authorization': params.authorization ?? ""
    },
  }).then(async response => {
    return {
      status: response.status,
      body: await response.json()
    };
  }).catch((err) => {
    console.log(err);
    return {
      status: 502,
      body: "Deu merda"
    };
  });
}

async function POST(params: TaskyApiPostRequest) {
  return await fetch(`http://localhost:3000/${params.route}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'authorization': params.authorization ?? ""
    },
    body: JSON.stringify(params.body)
  }).then(async response => {
    console.error(response);

    return {
      status: response.status,
      body: await response.json()
    };
  }).catch((err) => {
    console.error(err);
    return {
      status: 502,
      body: err
    };
  });
}

async function PATCH(params: TaskyApiPatchRequest) {
  return await fetch(`http://localhost:3000/${params.route}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'authorization': params.authorization ?? ""
    },
    body: JSON.stringify(params.body)
  }).then(async response => {
    console.error(response);

    return {
      status: response.status,
      body: await response.json()
    };
  }).catch((err) => {
    console.error(err);
    return {
      status: 502,
      body: err
    };
  });
}

async function DELETE(params: TaskyApiPatchRequest) {
  return await fetch(`http://localhost:3000/${params.route}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'authorization': params.authorization ?? ""
    },
  }).then(async response => {
    console.error(response);

    return {
      status: response.status,
      body: await response.json()
    };
  }).catch((err) => {
    console.error(err);
    return {
      status: 502,
      body: err
    };
  });
}

export const TaskyApi = {
  GET,
  POST,
  PATCH,
  DELETE,
}