const fetchPost = async (url: string, body: Object): Promise<Response> => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return resp;
};
