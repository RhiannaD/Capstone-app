import * as React from "react";
import "./Tab.css";
import { Link } from "react-router-dom";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";

export default function TabNav() {
    return (
        <>
            <Tabs className="NavTab" aria-label="tabs" defaultValue={0}>
                <TabList
                    variant="plain"
                    sx={{
                        "--List-padding": "0px",
                        "--List-radius": "0px",
                        "--ListItem-minHeight": "48px",
                        [`& .${tabClasses.root}`]: {
                            boxShadow: "none",
                            fontWeight: "md",
                            [`&.${tabClasses.selected}::before`]: {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                left: "var(--ListItem-paddingLeft)",
                                right: "var(--ListItem-paddingRight)",
                                bottom: 0,
                                height: 3,
                                // bgcolor: 'primary.400',
                            },
                        },
                    }}
                >
                    <Link className="nav-item" to="/">
                        <Tab>Profile</Tab>
                    </Link>
                    <Link className="nav-item" to="/tour">
                        <Tab className="nav-item">Tour</Tab>
                    </Link>
                    <Link className="nav-item" to="/merch">
                        <Tab className="nav-item">Merch</Tab>
                    </Link>
                </TabList>
            </Tabs>
        </>
    );
}
