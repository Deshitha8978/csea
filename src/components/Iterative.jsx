const students=[
    {id:1,name:"adit",rank:1},
    {id:2,name:"raj",rank:3},
    {id:3,name:"sara",rank:2}
];
function Iterative(){
    return(
        <ul>
            {students.map((student) =>(
                <li key={student.id}>
                    {student.name}(Rank: {student.rank})
                    {student.rank ===1 ? "🥇" :student.rank <=3 ? "⭐": null}
                </li>
            ))}
        </ul>
    );
} export default Iterative