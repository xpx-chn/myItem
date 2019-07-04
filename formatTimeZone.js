function formatTimeZone (lastDateTime, baseTimeZone = -480) {
	let offSetTime = new Date().getTimezoneOffset() - baseTimeZone
	let newTime = lastDateTime + (offSetTime * 60 * 1000)
	console.log(new Date(newTime).toString())
}
