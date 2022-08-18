import {
  AdExpect,
  AdModule,
  AdModules,
  AdRegBased,
  AdRegister,
  AdRegistier,
  AdRegistry,
  AdTools,
} from "admister";
import { QinTool } from "qin_case";
import { registry as people_group_regy } from "./ad-people-group";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

export const registry: AdRegistry = { name: "subgrupos_pessoas" };

export const registier: AdRegistier = { base, registry };

export const regBased: AdRegBased = {
  registier,
  joins: [
    {
      module: AdModules.PEOPLE_GROUP,
      registry: people_group_regy,
      alias: "people_group",
      filters: [{ linked: { name: "grupo", with: "codigo" } }],
    },
  ],
};

export class AdPeopleSubGroup extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, regBased);
    this.addField(AdTools.newAdFieldString("grupo", "Grupo - Cód.", 4).putKey());
    this.addField(AdTools.newAdFieldString("people_group.nome", "Grupo - Nome", 60));
    this.addField(AdTools.newAdFieldString("codigo", "Código", 4).putKey());
    this.addField(AdTools.newAdFieldAtivo());
    this.addField(AdTools.newAdFieldString("nome", "Nome", 60));
    this.prepare();
  }
}
