import { useMutation } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useFormStatus } from "react-dom";
import postContact from "../api/postContact";

export const Route = createLazyFileRoute("/contact")({
  component: ContactComponent,
});


function ContactInput(props){
  const {pending} = useFormStatus()
  return (
    <input 
    disabled={pending} name={props.name} type={props.type} placeholder={props.placeholder}/>
  )
}

function ContactComponent() {
  const mutation = useMutation({
    mutationFn: function (formData) {
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted</h3>
      ) : (
        <form action={mutation.mutate}>
          <ContactInput type="text"  name="name" placeholder="Name" />
          <ContactInput type="email" name="email" placeholder="Email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}
