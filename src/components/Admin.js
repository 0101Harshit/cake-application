function Admin() {
    var users = [
      { name: "Armaan", id: 2244, company: "Infobeans" },
      { name: "Aaditya", id: 2244342, company: "Infobeans" },
      { name: "Aaditya", id: 2244342, company: "Infobeans" },
      { name: "Aaditya", id: 2244342, company: "Infobeans" }
    ];

    return (
        <div>
            {
                users.map((each) => {
                    return (
                        <div style={{height:"100" , width:"100" , border:"1px solid"}}>
                            <label>HI {each.name} From &nbsp;</label>
                            <label> {each.company}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Admin