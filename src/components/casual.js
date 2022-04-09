<Table singleLine>
<Table.Header>
    <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Company Name</Table.HeaderCell>
        <Table.HeaderCell>Position</Table.HeaderCell>
        <Table.HeaderCell>Experience</Table.HeaderCell>
    </Table.Row>
</Table.Header>

<Table.Body>
    {[APIData].map((data, i) => {
        return (
            <Table.Row key={i}>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>{data.company_name}</Table.Cell>
                <Table.Cell>{data.position}</Table.Cell>
                <Table.Cell>{data.experience}</Table.Cell>
            </Table.Row>
        )
    })}

</Table.Body>
</Table>