import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// - Interfaces
import { Product } from "src/@types";
import { bearer } from "src/functions";

// - Storage
import { encryptStorage } from "src/storage";

export const fetchProductsThunk = createAsyncThunk(
  "products/fetch",
  async () => {
    try {
      const jwt = encryptStorage.getItem("jwt");

      if (jwt) {
        const request = await axios.get("/products", {
          headers: {
            Authorization: bearer(jwt),
          },
        });

        const products: Product[] = request.data?.response.products;

        return products;
      }

      return [];
    } catch (err) {
      return [];
    }
  }
);
