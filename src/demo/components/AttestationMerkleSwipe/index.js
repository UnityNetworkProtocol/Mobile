const AttestationRow = props =>(
  <SwipeRow
    leftOpenValue={75}
    rightOpenValue={-75}
    left={
      <Button success onPress={() => alert("Add")}>
        <Icon active name="add" style={{ color: "#FFF" }} />
      </Button>
    }
    right={
      <Button danger onPress={() => alert("Trash")}>
        <Icon active name="trash" />
      </Button>
    }
    body={
      <Flex align="stretch" justify="space-between" style={{backgroundColor: "#FFF", borderRadius: 10, marginBottom: 7, padding: 7 }} >
        <Flex align="center" width={"50%"} style={{textAlign: "left"}} >
          <Text note>{props.label}:</Text>
        </Flex>
        <Flex direction="column" align="flex-end" width="50%" style={{textAlign: "right"}} >
          <Text width="100%" style={{textAlign: "right"}}>{props.value}</Text>
        </Flex>
      </Flex>
    }
  />
)
