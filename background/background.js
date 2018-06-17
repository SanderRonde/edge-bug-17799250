// @ts-ignore
window.doTest = () => {
	console.log('Creating contextmenu items');
	// @ts-ignore
	browser.contextMenus.create({
		title: 'Test item'
	});
	// @ts-ignore
	browser.contextMenus.create({
		title: 'Test item'
	});
	// @ts-ignore
	browser.contextMenus.create({
		title: 'Test item'
	});
	// @ts-ignore
	browser.contextMenus.create({
		title: 'Test item'
	});

	window.setTimeout(() => {
		console.log('Calling browser.contextMenus.removeAll()');
		// @ts-ignore
		browser.contextMenus.removeAll(() => {
			// @ts-ignore
			const err = browser.runtime.lastError;
			if (err) {
				console.log('Got error', err);
				debugger;
			} else {
				console.log('No error');
			}
		});
	}, 500);
}