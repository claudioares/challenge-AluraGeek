import { HandleProductsCard } from "./controller/handle.productscard.js";
import { HandleProductsInput } from "./controller/handle.productsinput.js";

const card = new HandleProductsCard;
card.renderCard();

const inputCard = new HandleProductsInput;
inputCard.POSTProducts();