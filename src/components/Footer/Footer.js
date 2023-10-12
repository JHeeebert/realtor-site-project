import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./Footer.css";

export default function Footer() {
    const [value, setValue] = React.useState(0);
    return (
        <Box className="footer-container">
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                className="bottom-nav"
            >
                <BottomNavigationAction
                    label="Recents"
                    icon={<RestoreIcon className="bottom-nav-icon" />}
                    className="bottom-nav-label"
                />
                <BottomNavigationAction
                    label="Favorites"
                    icon={<FavoriteIcon className="bottom-nav-icon" />}
                    className="bottom-nav-label"
                />
                <BottomNavigationAction
                    label="Nearby"
                    icon={<LocationOnIcon className="bottom-nav-icon" />}
                    className="bottom-nav-label"
                />
            </BottomNavigation>
        </Box>
    );
}