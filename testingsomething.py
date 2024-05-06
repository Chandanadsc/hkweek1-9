import requests

# Specify the URL of the website you want to open
url = "https://app.100xdevs.com"

# Specify the cookie you want to include in the request
cookies = {"__Secure-next-auth.session-token": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNInO..OUoENhYrPWA0Kkak.s6-zuGoTOR4NdRA4ZzF59ctUiRFI58gPK1VPXD9bO-1RKBGFFASRxr8iBDZBZ8KyrRBvm_zLH4BxunLxtwICS3BWe6CRvL16CSrbTPXdyZ4thsUICdo6-nPc1AnK8H0vkK-ISEGL4UExtfnh5gn9CZ7PiAuwh_7KsfC0d2IpTV-6COpc-9jzgK7r5_dAHbUJXBP-6AVHRA3xOfWSWKG1ybnvfj0SCc5klvZE7DskZX90.xlhv3NCZUSHYK pt9q_OIJA"}

# Send a GET request with the specified cookies
response = requests.get(url, cookies=cookies)

# Print the content of the response
print(response.text)
