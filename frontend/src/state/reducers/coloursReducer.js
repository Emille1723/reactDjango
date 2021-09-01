const initialState = {
	colours : [
        {
            id:0,
            colour : '#ff8a80'
        },
        {
            id:1,
            colour : '#26a69a'
        },
        {
            id:2,
            colour : '#ab47bc'
        },
        {
            id:3,
            colour : '#9575cd'
        },
        {
            id:4,
            colour : '#03a9f4'
        },
        {
            id:5,
            colour : '#607d8b'
        },
		{
            id:6,
            colour : '#F5CBA7'
        },
		{
            id:7,
            colour : '#C0C0C0'
        },
		{
            id:8,
            colour : '#7D3C98'
        },
		{
            id:9,
            colour : '#F4D03F'
        },
		{
            id:10,
            colour : '#2E86C1'
        },
		{
            id:11,
            colour : '#943126'
        },
		{
            id:12,
            colour : '#AAB7B8'
        },
		{
            id:13,
            colour : '#48C9B0'
        },
    ]
};



const reducer = ( state = initialState, action) => {
	const {type, payload} = action;
	switch(type){
		// case "FETCH_COLOURS":
		// 	return {...state, colours : payload};
		default:
			return state;
	}
}


export default reducer;