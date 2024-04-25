export async function getData() {
  const response = await fetch(
    process.env.API_URL +
      '/nagiosxi/api/v1/objects/' +
      'servicestatus' +
      '?apikey=' +
      process.env.API_KEY +
      '&current_state=0'
  )
  const jsonData = await response.json()
  return jsonData
}

export default async function handler(req, res) {
  const jsonData = await getData()
  res.status(200).json(jsonData)
}

export const config = {
  api: {
    responseLimit: false,
  },
}
