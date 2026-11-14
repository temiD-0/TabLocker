const popheader = document.getElementById("test");
popheader.textContent = "Welcome User"; 

async function getAllTabs() {
	let queryOptions = { currentWindow: true };
	let tabs = await chrome.tabs.query(queryOptions);
	
	return tabs.map(tab => ({
		name: tab.title,
    		url: tab.url
  	}));
}

async function createSnapshot(name) {

	let tabsList = await getAllTabs();
	console.log(name + tabsList);
	return { 
		snapshotname: name,
		timeCreated: Date.now(),
		tabData: tabsList
		
	};
	
}

document.getElementById("save").onclick  = async (event) => {
	event.preventDefault(); 
	let sname = document.getElementById("snapname").value;
	if (!(sname === "")) {

		await createSnapshot(sname);
		const popheader = document.getElementById("test");
		popheader.textContent = "Snapshot succesfully saved"; 

	} else {
	
		let popheader = document.getElementById("test");
		popheader.textContent = "Please enter a valid name";

	}

}
