<template lang="pug">
  v-container(fill-height)
    v-row(align="center" justify="center")
      v-col.pa-5(cols="12" sm="6")
        .display-1 1F
        FloorPlan1F
          template(v-slot:Registration)
            Registration(bgc="#fffbbd")
          template(v-slot:Exhibition)
            Exhibition(bgc="#fffbbd")
          template(v-slot:Room105)
            Room105(bgc="#ffb169")
          template(v-slot:Room103)
            Room103(bgc="#ffeb82")
          template(v-slot:Room102)
            Room102(bgc="#ffe2a3")
          template(v-slot:Room101D)
            Room101D(bgc="#ffc28e")
          template(v-slot:Room101C)
            Room101C(bgc="#ffe37c")
          template(v-slot:Room101B)
            Room101B(bgc="#fff0a2")
          template(v-slot:Room101A)
            Room101A(bgc="#ffe0c3")
      v-col.pa-5(cols="12" sm="6")
        .display-1 2F
        FloorPlan2F
          template(v-slot:Room203)
            Room203(bgc="#daef9b")
          template(v-slot:Room201A)
            Room201A(bgc="#84d387")
          template(v-slot:Room201B)
            Room201B(bgc="#a2dea4")
          template(v-slot:Room201C)
            Room201C(bgc="#ceefcd")
          template(v-slot:Room201D)
            Room201D(bgc="#d2f9ec")
          template(v-slot:Room201E)
            Room201E(bgc="#93d2b2")
          template(v-slot:Room201F)
            Room201F(bgc="#67ba9a")
          template(v-slot:Room202)
            Room202(bgc="#d3f5eb")
      v-col.pa-5(cols="12" sm="6")
        .display-1 3F
        FloorPlan3F
          template(v-slot:NorthLounge)
            NorthLounge(fill="#c0d6ea")
          template(v-slot:BanquetHall)
            BanquetHall(fill="#cfefff")
          template(v-slot:SouthLounge)
            SouthLounge(fill="#abe0fe")
      v-col.pa-5(cols="12" sm="6")
        .display-1 4F
        FloorPlan4F
          template(v-slot:Joy)
            Joy(fill="#d3d5fb")
          template(v-slot:Elegance)
            Elegance(fill="#ede6f8")
</template>
<script>
import FloorPlan1F from "@/components/InDoorMap/1F/FloorPlan";
import Registration from "@/components/InDoorMap/1F/Registration";
import Exhibition from "@/components/InDoorMap/1F/Exhibition";
import Room105 from "@/components/InDoorMap/1F/Room105";
import Room103 from "@/components/InDoorMap/1F/Room103";
import Room102 from "@/components/InDoorMap/1F/Room102";
import Room101D from "@/components/InDoorMap/1F/Room101D";
import Room101C from "@/components/InDoorMap/1F/Room101C";
import Room101B from "@/components/InDoorMap/1F/Room101B";
import Room101A from "@/components/InDoorMap/1F/Room101A";
import FloorPlan2F from "@/components/InDoorMap/2F/FloorPlan";
import Room203 from "@/components/InDoorMap/2F/Room203";
import Room201A from "@/components/InDoorMap/2F/Room201A";
import Room201B from "@/components/InDoorMap/2F/Room201B";
import Room201C from "@/components/InDoorMap/2F/Room201C";
import Room201D from "@/components/InDoorMap/2F/Room201D";
import Room201E from "@/components/InDoorMap/2F/Room201E";
import Room201F from "@/components/InDoorMap/2F/Room201F";
import Room202 from "@/components/InDoorMap/2F/Room202";
import FloorPlan3F from "@/components/InDoorMap/3F/FloorPlan";
import NorthLounge from "@/components/InDoorMap/3F/NorthLounge";
import BanquetHall from "@/components/InDoorMap/3F/BanquetHall";
import SouthLounge from "@/components/InDoorMap/3F/SouthLounge";
import FloorPlan4F from "@/components/InDoorMap/4F/FloorPlan";
import Joy from "@/components/InDoorMap/4F/Joy";
import Elegance from "@/components/InDoorMap/4F/Elegance";

export default {
  name: "Map",
  components: {
    FloorPlan1F,
    Registration,
    Exhibition,
    Room105,
    Room103,
    Room102,
    Room101D,
    Room101C,
    Room101B,
    Room101A,
    FloorPlan2F,
    Room203,
    Room201A,
    Room201B,
    Room201C,
    Room201D,
    Room201E,
    Room201F,
    Room202,
    FloorPlan3F,
    NorthLounge,
    BanquetHall,
    SouthLounge,
    FloorPlan4F,
    Joy,
    Elegance
  }
};
</script>
