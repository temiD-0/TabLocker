//A check for function succes/failure
const popheader = document.getElementById("test");
popheader.textContent = "Welcome User"; 


async function getAllTabs() {
	let queryOptions = { currentWindow: true };
	let tabs = await chrome.tabs.query(queryOptions);
	
	//returning a new array with just the title and url features from tabs query
	return tabs.map(tab => ({
		name: tab.title,
    		url: tab.url
  	}));
}


async function createSnapshot(name) {

	let tabsList = await getAllTabs();
	return { 
		snapshotname: name,
		timeCreated: Date.now(),
		tabData: tabsList
		
	};
	
}

async function addSnapshot (snapshot) {
	let snapshots = await chrome.storage.local.get("List");
	let list = snapshots.List;
	
	//if no tab has been added yet
	if (list === undefined) {
		list = [];
	}
	
	//creation or addition concerning storage
	list.push(snapshot);
	console.log(list);
	await chrome.storage.local.set({ List: list });
	
	for (let i = 0; i < list.length; i ++) {
		console.log(list[i]);
	}
}

document.getElementById("save").onclick  = async (event) => {
	event.preventDefault(); 
	let sname = document.getElementById("snapname").value;
	if (!(sname === "")) {

		let snapshot = await createSnapshot(sname);
		await addSnapshot(snapshot);
		const popheader = document.getElementById("test");
		popheader.textContent = "Snapshot succesfully saved"; 

	} else {
	
		let popheader = document.getElementById("test");
		popheader.textContent = "Please enter a valid name";

	}

}
