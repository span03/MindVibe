// Assessment Function: Gets the mood level from the user and provides personalized feedback.
function submitAssessment() {
    const moodLevel = document.getElementById("moodLevel").value;
    const resultText = `Assessment complete! Your current mood level is ${moodLevel}. Based on this, we'll create a customized wellness path to enhance your mental health journey.`;
    document.getElementById("assessmentResult").innerText = resultText;
}

// Workshop Function: Displays specific information about each selected workshop.
function joinWorkshop(workshopType) {
    const workshopMap = {
        gratitude: "Gratitude Workshop: Discover practical techniques to foster gratitude and savor life’s moments.",
        positivity: "Positivity Workshop: Cultivate a positive mindset with daily strategies for improved outlook."
    };
    const resultText = `You have joined the ${workshopType === 'gratitude' ? "Gratitude" : "Positivity"} Workshop! ${workshopMap[workshopType]}`;
    document.getElementById("workshopResult").innerText = resultText;
}

// AI Support Function: Provides support options based on selected challenge type.
function aiSupport(type) {
    const aiSupportMap = {
        stress: "Stress Management Support: Providing methods to handle stress with guided relaxation and mindfulness exercises.",
        anxiety: "Anxiety Relief Support: Techniques to reduce anxiety and promote calmness.",
        motivation: "Motivation Boost: Customized suggestions to help renew your drive and focus."
    };
    const resultText = `AI Support for ${type.charAt(0).toUpperCase() + type.slice(1)}: ${aiSupportMap[type]}`;
    document.getElementById("aiSupportResult").innerText = resultText;
}

// Problem-Solving Strategy Function: Details specific strategy based on user selection.
function problemSolving(strategy) {
    const strategyMap = {
        resilience: "Resilience Strategy: Techniques to strengthen resilience, helping you recover from setbacks.",
        adaptability: "Adaptability Strategy: Skills to boost flexibility and adapt to life’s changes effectively."
    };
    const resultText = `Problem-Solving Strategy Selected: ${strategyMap[strategy]}`;
    document.getElementById("problemSolvingResult").innerText = resultText;
}

// Community Engagement Function: Confirms joining the community and provides a welcome message.
function joinCommunity() {
    const resultText = "Welcome to the MindVibe Community! Connect, share, and support one another in a safe, moderated space.";
    document.getElementById("communityResult").innerText = resultText;
}

// Therapy Session Function: Initiates virtual therapy session and displays a confirmation message.
function startTherapy() {
    const resultText = "Your virtual therapy session is starting. Please hold on, and a counselor will join you shortly.";
    document.getElementById("therapyResult").innerText = resultText;
}
