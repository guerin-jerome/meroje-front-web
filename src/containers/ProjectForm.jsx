import { RADIOS_OUI_NON } from "../constants/elements";
import { FormItem, FormFooter } from "../components/layouts";
import { Button, Datepicker, Input, RadioGroup } from "../components";
import { FormStyle } from "../styles/Form";
import { useForm } from "react-hook-form";

export const ProjectForm = () => {
  const { register, watch, handleSubmit } = useForm();

  const { hasDateEcheance, dateEcheance, montantAAtteindre, montantParMois } =
    watch();

  const onSubmit = (values) => console.debug("Submit values: ", values);

  return (
    <>
      <h1>Mon projet</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={FormStyle}>
        <FormItem>
          <Input
            label="Le nom de votre projet"
            placeholder="Nom du projet..."
            {...register("nomDuProjet")}
          />
        </FormItem>
        <FormItem>
          <RadioGroup
            legend="Il y a t'il une date d'échéance ?"
            options={RADIOS_OUI_NON}
            {...register("hasDateEcheance")}
          />
        </FormItem>
        {hasDateEcheance === "true" && (
          <FormItem>
            <Datepicker
              label="Votre date d'échéance"
              placeholder="JJ/MM/AAAA"
              {...register("dateEcheance")}
            />
          </FormItem>
        )}
        {(hasDateEcheance === "false" || !!dateEcheance) && (
          <FormItem>
            <Input
              type="number"
              label="Quel est le montant à atteindre ?"
              step="0.01"
              placeholder="Montant en euros"
              {...register("montantAAtteindre")}
            />
          </FormItem>
        )}
        {!!montantAAtteindre && hasDateEcheance === "false" && (
          <FormItem>
            <Input
              type="number"
              label="Combien souhaitez-vous mettre par mois ?"
              step="0.01"
              placeholder="Montant en euros"
              {...register("montantParMois")}
            />
          </FormItem>
        )}
        {!!montantAAtteindre &&
          (hasDateEcheance === "true" || !!montantParMois) && (
            <FormFooter>
              <Button>Valider</Button>
            </FormFooter>
          )}
      </form>
    </>
  );
};
