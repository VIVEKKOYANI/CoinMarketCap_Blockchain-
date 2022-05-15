export default function handler() {
    const getData = async () => {
        const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listing/latest?CMS_PRO_API_KEY=d9477590-70a5-4fc0-a13c-c84db452aeed',
            {
                method: 'GET',
                headers: {
                    Accept: '*/*'
                },
            },
        )

        const data = await response.json()

        res.status(200).json({ data })
    }

    getData()
}