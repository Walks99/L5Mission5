// STYLES
import styles from "./Hero.module.css";

// COMPONENTS
import PrimaryButton from "../../../common-components/buttons/PrimaryButton";
import SecondaryButton from "../../../common-components/buttons/SecondaryButton";

export default function Hero() {
    return (
        <div id={styles['heroGrid']}>
            <div id={styles['heroContent']}>
                <h2>Unlock Your Dream Home Today</h2>
                <h3>Your home, your future</h3>
                <div id={styles['buttons']}>
                    <SecondaryButton displayText="Property Management"></SecondaryButton>
                    <PrimaryButton displayText="Find a Rental"></PrimaryButton>
                </div>
            </div>
        </div>
    );
}