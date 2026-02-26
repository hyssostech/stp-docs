// @ts-check
/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const typedocSidebar = {
  items: [
    {
      type: "category",
      label: "Enumerations",
      items: [
        {
          type: "doc",
          id: "api/enumerations/CommandRelationship",
          label: "CommandRelationship"
        },
        {
          type: "doc",
          id: "api/enumerations/StpMessageLevel",
          label: "StpMessageLevel"
        },
        {
          type: "doc",
          id: "api/enumerations/StpRole",
          label: "StpRole"
        },
        {
          type: "doc",
          id: "api/enumerations/TaskHow",
          label: "TaskHow"
        },
        {
          type: "doc",
          id: "api/enumerations/TaskROE",
          label: "TaskROE"
        },
        {
          type: "doc",
          id: "api/enumerations/TaskWhat",
          label: "TaskWhat"
        },
        {
          type: "doc",
          id: "api/enumerations/TaskWhy",
          label: "TaskWhy"
        }
      ]
    },
    {
      type: "category",
      label: "Classes",
      items: [
        {
          type: "doc",
          id: "api/classes/DISCode",
          label: "DISCode"
        },
        {
          type: "doc",
          id: "api/classes/Interval",
          label: "Interval"
        },
        {
          type: "doc",
          id: "api/classes/LatLon",
          label: "LatLon"
        },
        {
          type: "doc",
          id: "api/classes/Location",
          label: "Location"
        },
        {
          type: "doc",
          id: "api/classes/MovementFeatures",
          label: "MovementFeatures"
        },
        {
          type: "doc",
          id: "api/classes/Resource",
          label: "Resource"
        },
        {
          type: "doc",
          id: "api/classes/Sidc",
          label: "Sidc"
        },
        {
          type: "doc",
          id: "api/classes/Size",
          label: "Size"
        },
        {
          type: "doc",
          id: "api/classes/StpC2SIMOptions",
          label: "StpC2SIMOptions"
        },
        {
          type: "doc",
          id: "api/classes/StpCoa",
          label: "StpCoa"
        },
        {
          type: "doc",
          id: "api/classes/StpItem",
          label: "StpItem"
        },
        {
          type: "doc",
          id: "api/classes/StpRecognizer",
          label: "StpRecognizer"
        },
        {
          type: "doc",
          id: "api/classes/StpSymbol",
          label: "StpSymbol"
        },
        {
          type: "doc",
          id: "api/classes/StpTask",
          label: "StpTask"
        },
        {
          type: "doc",
          id: "api/classes/StpTaskOrg",
          label: "StpTaskOrg"
        },
        {
          type: "doc",
          id: "api/classes/StpTaskOrgRelationship",
          label: "StpTaskOrgRelationship"
        },
        {
          type: "doc",
          id: "api/classes/StpTaskOrgUnit",
          label: "StpTaskOrgUnit"
        },
        {
          type: "doc",
          id: "api/classes/StpWebSocketsConnector",
          label: "StpWebSocketsConnector"
        },
        {
          type: "doc",
          id: "api/classes/TaskOrgState",
          label: "TaskOrgState"
        }
      ]
    },
    {
      type: "category",
      label: "Interfaces",
      items: [
        {
          type: "doc",
          id: "api/interfaces/IC2SIMProxy",
          label: "IC2SIMProxy"
        },
        {
          type: "doc",
          id: "api/interfaces/ISpeechRecoItem",
          label: "ISpeechRecoItem"
        },
        {
          type: "doc",
          id: "api/interfaces/ISpeechRecoResult",
          label: "ISpeechRecoResult"
        },
        {
          type: "doc",
          id: "api/interfaces/IStpConnector",
          label: "IStpConnector"
        },
        {
          type: "doc",
          id: "api/interfaces/IStpConnectorConstructor",
          label: "IStpConnectorConstructor"
        },
        {
          type: "doc",
          id: "api/interfaces/OnSpeechRecognizedEvent",
          label: "OnSpeechRecognizedEvent"
        },
        {
          type: "doc",
          id: "api/interfaces/OnStpMessageEvent",
          label: "OnStpMessageEvent"
        },
        {
          type: "doc",
          id: "api/interfaces/StpMessage",
          label: "StpMessage"
        },
        {
          type: "doc",
          id: "api/interfaces/SymbolAddedEvent",
          label: "SymbolAddedEvent"
        }
      ]
    }
  ]
};
module.exports = typedocSidebar.items;