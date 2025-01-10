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
  token?: string,
  onSuccess?: any,
}


async function request(params: TaskyApiBaseResquest) {
  return await fetch(`http://localhost:3000/${params.route}`, {
    method: params.method,
    headers: {
      'Content-Type': 'application/json',
      'authorization': params.token ?? ""
    }
  })
    .then(params.onSuccess ?? (
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
  return await request({
    route: params.route,
    method: "GET",
    token: params.authorization
  });
}

async function POST(params: TaskyApiPostRequest) {
  return await request({
    route: params.route,
    method: "POST",
    token: params.authorization,
  });
}

async function PATCH(params: TaskyApiPatchRequest) {
  return await request({
    route: params.route,
    method: "PATCH",
    token: params.authorization
  });
}

async function DELETE(params: TaskyApiPatchRequest) {
  return await request({
    route: params.route,
    method: "DELETE",
    token: params.authorization,
    onSuccess: async (response: any) => {
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
    }
  });
}

export const TaskyApi = {
  GET,
  POST,
  PATCH,
  DELETE,
}