import React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import "./Tour.css";
import {  db } from "../../firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const Tour = () => {
    const [data, setData] = React.useState<{
        email: string;
        status: "initial" | "loading" | "failure" | "sent";
    }>({
        email: "",
        status: "initial",
    });

    const userRefCollection = collection(db, "users");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // const querySnapshot = await getDocs(
        //     collection(db, "email", auth.currentUser?.email)
        // );
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.data());
        // });
        // setData((current) => ({ ...current, status: "loading" }));
        // setTimeout(() => {
        //     setData({ email: "", status: "sent" });
        // }, 1500);

        try{

        const docRef = await addDoc(userRefCollection, {
          email: data.email,
          
        });

        console.log("Document written with Id", docRef.id)
      }catch(error){
        console.log("Error adding document to firebase", error);
      }
    };

    return (
        <>
            <div className="tourCard">
                <img
                    className="Tour"
                    src="./images/Jacks_Tour.jpg"
                    alt="Tour details"
                />
                <form onSubmit={handleSubmit} id="demo">
                    <FormControl>
                        <FormLabel
                            sx={(theme) => ({
                                "--FormLabel-color":
                                    theme.vars.palette.primary.plainColor,
                            })}
                        >
                            <p className="Update">Want Updates?</p>
                        </FormLabel>
                        <Input
                            sx={{ "--Input-decoratorChildHeight": "45px" }}
                            placeholder="Enter Email"
                            type="email"
                            required
                            value={data.email}
                            onChange={(event) =>
                                setData({
                                    email: event.target.value,
                                    status: "initial",
                                })
                            }
                            error={data.status === "failure"}
                            endDecorator={
                                <Button
                                    variant="solid"
                                    color="primary"
                                    loading={data.status === "loading"}
                                    type="submit"
                                    sx={{
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                    }}
                                >
                                    Subscribe
                                </Button>
                            }
                        />
                        {data.status === "failure" && (
                            <FormHelperText
                                sx={(theme) => ({
                                    color: theme.vars.palette.danger[400],
                                })}
                            >
                                Oops! something went wrong, please try again
                                later.
                            </FormHelperText>
                        )}
                        {data.status === "sent" && (
                            <FormHelperText
                                sx={(theme) => ({
                                    color: theme.vars.palette.primary[400],
                                })}
                            >
                                You are all set!
                            </FormHelperText>
                        )}
                    </FormControl>
                </form>
            </div>
        </>
    );
};

export default Tour;
