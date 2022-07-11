import React from "react";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {

  const router = useRouter();


	const addMeetUpHandler = async (enteredMeetupData) => {
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(enteredMeetupData),
			headers: {
				"Content-Type": "application/json"
			}
		});

    router.push('/')
	};

	return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
};

export default NewMeetupPage;
