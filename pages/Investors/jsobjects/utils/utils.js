export default {
	getDummyData: () => {
		const data = [
			{
				"InvestorID": 100,
				"investmentFund": "Gislason, Weimann and Donnelly",
				"location": "Jakarta,Indonesia",
				"investorName": "Millisent Pottiphar",
				"topInvestments": "<svg/onload=alert(1)><svg>",
				"fundSize": 31,
				"website": "www.google.com<svg/onload=alert(1)><svg>",
				"interestLevel": 4,
				"address": "<svg/onload=alert(1)><svg>",
				"rowIndex": 1
			},
			{
				"InvestorID": 103,
				"investmentFund": "Funk, Cassin and Kovacek",
				"location": "Manila,Philippines",
				"investorName": "Lora Godleman",
				"topInvestments": "O",
				"fundSize": 36,
				"website": "https://yellowbr1cks.fr",
				"interestLevel": 4,
				"address": "25 rue Lenepveu",
				"rowIndex": 3
			},
			{
				"InvestorID": 104,
				"investmentFund": "O'Reilly, Dicki and Wisozk",
				"location": "Seoul,South Korea",
				"investorName": "Vivyanne Ridsdole",
				"topInvestments": "Towne, Weissnat and Toy",
				"fundSize": 38,
				"website": "srbgamer.w3spaces.com",
				"interestLevel": 5,
				"address": "2 Sauthoff Point",
				"rowIndex": 4
			}
		]

		return data;
	},

	getInvestors: async () => {
		try{
			const data = await SelectQuery.run();
			if (data && data.length > 0) {
				return data;
			}
		}catch(error){
			return utils.getDummyData();
		}

	},

	updateInvestorDetails: async () => {
		try{
			const data = await SelectQuery.run();
			if (data && data.length > 0) {
				await UpdateQuery.run();
				showAlert('Investor details updated!', 'success');
			}
		}catch(error){
			showAlert('Demo Investor details updated!', 'success');
		}
	},

	createInvestor: async () => {
		try{
			const data = await SelectQuery.run();
			if (data && data.length > 0) {
				await InsertQuery.run();
				closeModal('Modal1')
				showAlert('Investor details created!', 'success');
				await SelectQuery.run();
			} 
		}catch(error){
			showAlert('Demo Investor details created!', 'success');
		}
	},
}