export default {
	myVar1: [],
	myVar2: {},
	getLatLong: () => {

	},
	conversationNotes: [],
	setConversationNotes: (notes) => {
		this.conversationNotes = notes;
	},
	getConversationNotes: async () => {
		const data = await getConversationDetails.run();
		const formattedData = data.sort((a, b) => a.Date - b.Date).reverse();
		this.conversationNotes = formattedData;
		return formattedData;
	},
}