import API_BASE_URL from "../config";
import axios from "axios";

// Fetch Products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

// Fetch Events
export const fetchEvents = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/events`);
        return response.data;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
};

// Submit a Demo Request
export const submitDemoRequest = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/demo-request`, data);
        return response.data;
    } catch (error) {
        console.error("Error submitting demo request:", error);
        return { success: false };
    }
};

// Submit an Event Booking
export const submitEventBooking = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/book-event`, data);
        return response.data;
    } catch (error) {
        console.error("Error booking event:", error);
        return { success: false };
    }
};
