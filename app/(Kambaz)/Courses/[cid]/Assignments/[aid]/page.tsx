"use client";
import { useState } from "react";

export default function AssignmentEditor() {
  const [submissionType, setSubmissionType] = useState("online"); // online, file, website
  const [onlineOptions, setOnlineOptions] = useState({
    textEntry: true,
    websiteURL: false,
    mediaRecordings: false,
    studentAnnotation: false,
    fileUpload: false,
  });
  const [showFileUpload, setShowFileUpload] = useState(false);

  type OnlineOptionKey = keyof typeof onlineOptions;

  const handleOnlineOptionChange = (key: OnlineOptionKey) => {
    setOnlineOptions((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      if (key === "fileUpload") setShowFileUpload(updated.fileUpload);
      return updated;
    });
  };

  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name */}
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />

      {/* Description */}
      <label htmlFor="wd-text-entry">Description</label>
      <textarea id="wd-text-entry">
        The assignment is available online. Submit a link to the landing page of...
      </textarea>
      <br /><br />

      {/* Assignment Details */}
      <table cellPadding={10}>
        <tbody>
          <tr>
            <td align="right"><label htmlFor="wd-points">Points</label></td>
            <td><input id="wd-points" defaultValue={100} /></td>
          </tr>

          <tr>
            <td align="right"><label htmlFor="wd-group">Group</label></td>
            <td><input id="wd-group" type="text" /></td>
          </tr>

          <tr>
            <td align="right"><label htmlFor="wd-display-grade-as">Display Grade As</label></td>
            <td>
              <select id="wd-display-grade-as">
                <option value="points">Points</option>
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>

          {/* Submission Type */}
          <tr>
            <td align="right"><label htmlFor="wd-submission-type">Submission Type</label></td>
            <td>
              <select
                id="wd-submission-type"
                value={submissionType}
                onChange={(e) => setSubmissionType(e.target.value)}
              >
                <option value="online">Online</option>
                <option value="file">File Upload</option>
                <option value="website">Website URL</option>
              </select>
            </td>
          </tr>

          {/* Online Options only if submissionType is online */}
          {submissionType === "online" && (
            <>
              <tr>
                <td colSpan={2}>
                  <fieldset>
                    <legend>Online Entry Options</legend>
                    <label>
                      <input
                        type="checkbox"
                        checked={onlineOptions.textEntry}
                        onChange={() => handleOnlineOptionChange("textEntry")}
                      />{" "}
                      Text Entry
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        checked={onlineOptions.websiteURL}
                        onChange={() => handleOnlineOptionChange("websiteURL")}
                      />{" "}
                      Website URL
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        checked={onlineOptions.mediaRecordings}
                        onChange={() => handleOnlineOptionChange("mediaRecordings")}
                      />{" "}
                      Media Recordings
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        checked={onlineOptions.studentAnnotation}
                        onChange={() => handleOnlineOptionChange("studentAnnotation")}
                      />{" "}
                      Student Annotation
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        checked={onlineOptions.fileUpload}
                        onChange={() => handleOnlineOptionChange("fileUpload")}
                      />{" "}
                      File Upload
                    </label>
                  </fieldset>
                </td>
              </tr>

              {showFileUpload && (
                <tr>
                  <td align="right"><label htmlFor="wd-file-upload">Upload File</label></td>
                  <td><input id="wd-file-upload" type="file" /></td>
                </tr>
              )}
            </>
          )}

          <tr>
            <td align="right"><label htmlFor="wd-assign-to">Assign To</label></td>
            <td>
              <select id="wd-assign-to">
                <option value="everyone">Everyone</option>
                <option value="group">Group</option>
              </select>
            </td>
          </tr>

          {/* Deadlines */}
          <tr>
            <td align="right"><label htmlFor="wd-due-date">Due Date</label></td>
            <td><input id="wd-due-date" type="datetime-local" /></td>
          </tr>

          <tr>
            <td align="right"><label htmlFor="wd-available-from">Available From</label></td>
            <td><input id="wd-available-from" type="datetime-local" /></td>
          </tr>

          <tr>
            <td align="right"><label htmlFor="wd-available-until">Available Until</label></td>
            <td><input id="wd-available-until" type="datetime-local" /></td>
          </tr>
        </tbody>
      </table>

      <br />
      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
}
