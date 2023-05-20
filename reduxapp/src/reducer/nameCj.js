const initialState = "SAHIL";
const changeName = (state=initialState ,action)=>{

	if(action.type==="CHANGENAME")
	{
		if(state==="SAHIL")
			{
				return "FAKIR"	
			}
			else
			{
				return 'SAHIL'
			}
	}
	else
	{
		return state
	}
	
}

export default changeName;