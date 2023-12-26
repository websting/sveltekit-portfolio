const actions = {
  // @ts-ignore
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSeAlNAprqyV-1_AGYo1vJeONqFVZJ6JU1f-aLU00kOKPxZKQw/formResponse?usp=pp_url&entry.1035798115=${name}&entry.1497407846=${email}&entry.105423197=${message}&submit=Submit`;
    const res = await fetch(prefilledLink);
    console.log(res);
  }
};
export {
  actions
};
