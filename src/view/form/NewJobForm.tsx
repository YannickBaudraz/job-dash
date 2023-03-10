import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import SelectOption from '@material-tailwind/react/components/Select/SelectOption';
import ThemedInput from '../../common/component/form/input/ThemedInput';
import ThemedSelect from '../../common/component/form/input/ThemedSelect';

export default function NewJobForm() {
  return (
    <form>
      <Card>
        <CardHeader
          variant="gradient"
          color="deep-purple"
          className="mb-4 grid place-items-center py-6"
        >
          <Typography variant="h2">Add job</Typography>
        </CardHeader>
        <CardBody className="grid gap-6 lg:grid-cols-3">
          <ThemedInput type="text" />

          <ThemedInput type="text" />

          <ThemedInput type="text" />

          <ThemedSelect name="select">
            <SelectOption value="1">Option 1</SelectOption>
            <SelectOption value="2">Option 2</SelectOption>
            <SelectOption value="3">Option 3</SelectOption>
          </ThemedSelect>

          <ThemedSelect name="select">
            <SelectOption value="1">Option 1</SelectOption>
            <SelectOption value="2">Option 2</SelectOption>
            <SelectOption value="3">Option 3</SelectOption>
          </ThemedSelect>
        </CardBody>

        <CardFooter className="ml-auto flex w-1/3 gap-4">
          <Button type="reset" variant="outlined" color="deep-purple" fullWidth>
            Clear
          </Button>
          <Button type="submit" color="deep-purple" fullWidth>
            Save
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
