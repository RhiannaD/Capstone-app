import React, { useCallback, useState } from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import "./Merch.css";

const Merch = () => {
    const [itemsCount, setItemsCount] = useState(0);
    const [itemsInCart, setItemsInCart] = useState(0);

    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
            color: "#ff6d75",
        },
        "& .MuiRating-iconHover": {
            color: "#ff3d47",
        },
    });
    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        "& .MuiBadge-badge": {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: "0 4px",
        },
    }));

    //let itemsInCart = 0;
    //let itemsCount =0;

    return (
        <>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={0} className="itemNum">
                    <ShoppingCartIcon
                        className="Cart"
                        sx={{ width: 40, height: 40 }}
                    />
                </StyledBadge>
            </IconButton>

            

            <div className="MerchBox">
                <Box
                    sx={{
                        "& > legend": { mt: 2 },
                    }}
                >
                    <Typography component="legend"></Typography>
                    <StyledRating
                        className="Ratings"
                        name="customized-color"
                        defaultValue={2}
                        getLabelText={(value: number) =>
                            `${value} Heart${value !== 1 ? "s" : ""}`
                        }
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                </Box>
                <>
                <img
                        className="Merch"
                        src="./images/Merch.jpg"
                        alt="Jacks Merch"
                    />
                {itemsInCart && <span className="cartItemsCount">{itemsInCart}</span> }
                </>
                {/* <div className="cartWrapper">
                
                    {itemsInCart && (
                        <span className="cartItemsCount">{itemsInCart}</span>
                    )}
                </div> */}
            </div>

            <div className="shopInfo">
                <h1>La Divina Femenina</h1>
                <h5>$35.00</h5>
                <button className="buttonMinus"
                    onClick={() => {
                        console.log("In increment count method");

                        setItemsCount(itemsCount >=1 ? itemsCount - 1: 0);
                    }}
                >
                    
                   < RemoveCircleOutlineIcon/>
                </button>
                {itemsCount}
                <button className='buttonPlus' onClick={() => setItemsCount(itemsCount + 1)}>
                <AddCircleOutlineIcon/>
                </button>
      
                <div
                    className="add"
                    onClick={() => {
                        console.log("Adding items to cart");
                        console.log("items count", itemsCount);
                        setItemsInCart(itemsCount);
                    }}
                >
                    <Button variant="contained">Add To Cart</Button>
                </div>
            </div>
        </>
    );
};

export default Merch;
