async function showpost() { 
    const response = await fetch("https://my-json-server.typicode.com/ala-lms-veilig/lo2e-swd3-groep6/posts");
    const posts = await response.json();

    const postsTableBody = document.getElementById('posts-body');

    // Clear the table before inserting new data
    postsTableBody.innerHTML = '';

    // Iterate over the posts and append rows to the table
    posts.forEach(post => {
        const row = document.createElement('tr');

        // Creating cells for the row
        const idCell = document.createElement('td');
        idCell.textContent = post.id;

        const titleCell = document.createElement('td');
        titleCell.textContent = post.title;

        const viewsCell = document.createElement('td');
        viewsCell.textContent = post.views;

        // Append the cells to the row
        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(viewsCell);

        // Append the row to the table body
        postsTableBody.appendChild(row);
    });
}

// Call the function to load posts
showpost();
