import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, { payload: { userId, courseId } }) => {
      const newEnrollment = { _id: Date.now().toString(), user: userId, course: courseId };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    unenroll: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
    loadEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
    },
  },
});

export const { enroll, unenroll, loadEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
