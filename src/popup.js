const popheader = document.getElementById("test");
popheader.textContent = "Success"; 

async function getAllTabs() {
	let queryOptions = { currentWindow: true };
	let tabs = await chrome.tabs.query(queryOptions);
	
	return tabs.map(tab => ({
		name: tab.title,
    		url: tab.url
  	}));
}

async function tabLog() {

	let tabsList = await getAllTabs();
	tabsList.forEach(({ name, url }) => {
    		console.log("Title: " + name + ", URL: " + url);
  	});
}

tabLog();
