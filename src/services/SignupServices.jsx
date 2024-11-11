export async function signup(object_) {
  const apiUrl = `https://frontend-app-exgv-jql2.onrender.com/users/signup`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object_), // Send the form data as JSON
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Erreur de connexion");
    }

    if (responseData.success) {
      // Return success status
      return { success: true, message: responseData.message };
    } else {
      return { success: false, message: responseData.message };
    }
  } catch (error) {
    throw new Error(error.message || "Erreur inattendue");
  }
}
