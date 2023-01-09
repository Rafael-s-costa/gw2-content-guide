export function makeCall(endpoint: string, queryParams?: string): any {
    var queryString: string = '';
    
    if (queryParams == null)
        queryString = '&${queryParams}';

    fetch('https://api.guildwars2.com/v2/${endpoint}?access_token=06523B82-C8E5-3F48-B881-5A8250329309FB9BBA56-2DEA-4DC5-BA7D-50513A4E54E9${queryString}')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}
