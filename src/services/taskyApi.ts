export interface TaskyApiGetRequest {
  route: string,
  authorization?: string,
}
export interface TaskyApiPostRequest extends TaskyApiGetRequest {
  body?: any;
}

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

export const TaskyApi = {
  GET,
  POST,
}