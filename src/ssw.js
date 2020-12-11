const  { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { CPF_SEARCH } = require('./endpoints'); 

const searchByCpf = async (cpf, callback) => {
    let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize({width: 640, height: 480}))
    .build();
        driver.get('https://ssw.inf.br/tracking/ssw_destinatario');
        await driver.findElement(By.id('InputCPF')).sendKeys(cpf);
        await driver.findElement(By.className('btn btn-primary')).click();
        await driver.findElement(By.tagName('a')).click();
        driver.executeScript(`
            let rows = document.getElementsByTagName('tr');
            let data = [];
            for (let i = 1; i < rows.length; i++) {
                let col = rows[i].getElementsByTagName('td');
                let date_hour = col[0].innerText;
                let place = col[1].innerText;
                let status = col[2].innerText;
                data.push({
                    data: date_hour,
                    unidade: place,
                    situacao: status
                });
            }
            return JSON.stringify(data);
        `).then(output => {
            callback.setHeader('Content-Type', 'application/json');
            callback.status(200).end(output);
            driver.quit();
        });
        
    
}

module.exports = { searchByCpf };

