
export const post = async ({request}) => {
    const data = await request.formData()

    const name = data.get("name");
    const last = data.get("last");
    const email = data.get("email");
    const message = data.get("message");

    const res = await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSfMxBcrfB8nn9LESjlHUa_4pJHQRNoybdVsgJUGTmX-CX7lgw/formResponse?usp=pp_url&entry.677562827=${name}&entry.856507807=${last}&entry.2012844668=${email}&entry.961852019=${message}&submit=Submit`)

    //const res = await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSfMxBcrfB8nn9LESjlHUa_4pJHQRNoybdVsgJUGTmX-CX7lgw/formResponse?usp=pp_url&entry.677562827=${name}&entry.2012844668=${email}&entry.961852019=${message}&submit=Submit`);

    return {
        
    }
}