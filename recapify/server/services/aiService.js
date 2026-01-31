export const summarizeTranscript = async (transcript) => {

  const sentences = transcript.split(".").filter(Boolean);

  const summary =
    sentences.length > 2
      ? sentences.slice(0, 2).join(". ") + "."
      : transcript;

  const actionItems = [];

  if (transcript.toLowerCase().includes("decide")) {
    actionItems.push("Document final decisions");
  }
  if (transcript.toLowerCase().includes("implement")) {
    actionItems.push("Start implementation work");
  }
  if (transcript.toLowerCase().includes("test")) {
    actionItems.push("Test the proposed solution");
  }

  if (actionItems.length === 0) {
    actionItems.push("Review meeting notes");
  }

  return { summary, actionItems };
};
