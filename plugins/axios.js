import https from 'https';

export default function ({ $axios }, inject) {
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

    $axios.onRequest((config) => {
      console.log(config)
    config.headers = {
        common: {
        // 'content-management-api-key': 'm5p2cz5qzc9zbfncq5avk2mkqwxkawskw3ehgsddjjtupn3vjhp8p95b8bst8mzw',
        'Content-Type': 'application/json',
        },
        
      }
    //   console.log(config)
      return config
    })
    $axios.onResponse((response) => {
      return response.data
    })
    $axios.onError((error) => {
      return Promise.resolve(error)
    })
  

  }