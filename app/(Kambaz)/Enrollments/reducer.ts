import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
  userId: string;
  courseId: string;
}

const loadEnrollmentsFromLocalStorage = (): Enrollment[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("enrollments");
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

const saveEnrollmentsToLocalStorage = (enrollments: Enrollment[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("enrollments", JSON.stringify(enrollments));
  }
};

const initialState = {
  enrollments: loadEnrollmentsFromLocalStorage(),
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, { payload: { userId, courseId } }: { payload: { userId: string; courseId: string } }) => {
      const existing = state.enrollments.find(
        (e: Enrollment) => e.userId === userId && e.courseId === courseId
      );
      if (!existing) {
        state.enrollments.push({ userId, courseId });
        saveEnrollmentsToLocalStorage(state.enrollments);
      }
    },
    unenroll: (state, { payload: { userId, courseId } }: { payload: { userId: string; courseId: string } }) => {
      state.enrollments = state.enrollments.filter(
        (e: Enrollment) => !(e.userId === userId && e.courseId === courseId)
      );
      saveEnrollmentsToLocalStorage(state.enrollments);
    },
    loadEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    clearEnrollments: (state) => {
      state.enrollments = [];
      saveEnrollmentsToLocalStorage(state.enrollments);
    },
  },
});

export const { enroll, unenroll, loadEnrollments, clearEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
