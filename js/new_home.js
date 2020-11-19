window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"
                      +"<th>Salary</th><th>StartDate</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
                    <td>
                        <img class="profile" alt="" src="../assets/Ellipse 1.png">
                    </td>
                    <td>Aditya Kumar</td>
                    <td>Male</td>
                    <td><div class="dept-label">Engineer</div>
                    <div class="dept-label">Finance</div></td>
                    <td>100000</td>
                    <td>31 December 2020</td>
                    <td>
                        <img id="1" onclick="remove(this)" alt="delete"
                        src="../assets/delete-black-18dp.svg">
                        <img id="2" onclick="update(this)" alt="edit"
                        src="../assets/create-black-18dp.svg">
                    </td>
        </tr>
        `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}