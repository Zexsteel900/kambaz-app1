import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const getInitialEnrollments = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("enrollments");
    return stored ? JSON.parse(stored) : enrollments;
  }
  return enrollments;
};

const initialState = {
  enrollments: getInitialEnrollments(),
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, { payload: { userId, courseId } }) => {
      const newEnrollment = {
        _id: Date.now().toString(),
        user: userId,
        course: courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment];
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
    unenroll: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) => !(enrollment.user === userId && enrollment.course === courseId)
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
  },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
