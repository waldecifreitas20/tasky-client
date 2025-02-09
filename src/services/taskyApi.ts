import { appEnvs } from "./dotenv";


export interface TaskyApiGetRequest {
  route: string,
  authorization?: string,
}
export interface TaskyApiPostRequest extends TaskyApiGetRequest {
  body?: any;
}
export interface TaskyApiPatchRequest extends TaskyApiPostRequest { }


export interface TaskyApiBaseResquest {
  route: string,
  method: string,
  authorization?: string,
  onResponse?: any,
  body?: any,
}


async function request(params: TaskyApiBaseResquest) {
  return await fetch(`${appEnvs.API_URL}/${params.route}`, {
    method: params.method,
    headers: {
      'Content-Type': 'application/json',
      'authorization': params.authorization ?? ""
    },
    body: JSON.stringify(params.body)
  })
    .then(params.onResponse ?? (
      async (response: any) => {
        return {
          status: response.status,
          body: await response.json()
        }
      }))
    .catch((err) => {
      console.error(err);
      return {
        status: 502,
        body: err
      };
    });
}

async function GET(params: TaskyApiGetRequest) {
  return await request({ method: "GET", ...params });
}

async function POST(params: TaskyApiPostRequest) {
  return await request({ method: "POST", ...params });
}

async function PATCH(params: TaskyApiPatchRequest) {
  return await request({ method: "PATCH", ...params });
}

async function DELETE(params: TaskyApiPatchRequest) {
  return await request({
    method: "DELETE",
    onResponse: async (response: any) => {
      console.error(response);
      try {
        return {
          status: response.status,
          body: await response.json()
        }
      } catch (error) {
        return {
          status: response.status,
        }
      }
    },
    ...params,
  });
}

export const TaskyApi = {
  GET,
  POST,
  PATCH,
  DELETE,
}