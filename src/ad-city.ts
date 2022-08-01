import {
  AdExpect,
  AdModule,
  AdModules,
  AdRegBase,
  AdRegister,
  AdRegistry,
  AdTools,
} from "admister";
import { QinTool } from "qin_case";
import { registry as nation_regy } from "./ad-nation";
import { registry as state_regy } from "./ad-state";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

export const registry: AdRegistry = {
  base,
  name: "cidades",
};

export const register: AdRegBase = {
  registry,
  joins: [
    {
      module: AdModules.NATION,
      registry: nation_regy,
      alias: "nation",
      filters: [{ linked: { name: "pais", with: "codigo" } }],
    },
    {
      module: AdModules.STATE,
      registry: state_regy,
      alias: "state",
      filters: [
        { linked: { name: "pais", with: "pais" } },
        { linked: { name: "estado", with: "codigo" } },
      ],
    },
  ],
};

export class AdCity extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, register);
    this.addField(AdTools.newAdFieldString("codigo", "Código", 6).putKey());
    this.addField(AdTools.newAdFieldAtivo());
    this.addField(AdTools.newAdFieldString("pais", "País - Cód.", 4));
    this.addField(AdTools.newAdFieldString("nation.nome", "País - Nome", 60));
    this.addField(AdTools.newAdFieldString("estado", "Estado - Cód.", 4));
    this.addField(AdTools.newAdFieldString("state.nome", "Estado - Nome", 60));
    this.addField(AdTools.newAdFieldString("nome", "Nome", 60));
    this.prepare();
  }
}
