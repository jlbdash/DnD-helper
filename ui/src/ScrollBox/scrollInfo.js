export const scrollInfo = () => {
  const bigSection = (
    <>
      <section>
        <h1>The Story</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. .
        </p>
      </section>
      <section>
        <div class="visual">
          <div id="map" data-value="Victoria"></div>
        </div>
        <div class="steps">
          <div
            class="step"
            data-value="Sphynx"
            data-attribute=""
            data-target=""
          >
            Second Step
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. .
          </div>

          <div class="step" data-value="Angel" data-attribute="" data-target="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. .
          </div>

          <div
            class="step"
            data-value="Uluru"
            data-attribute="fill"
            data-target="rectObj"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </div>

          <div
            class="step"
            data-value="Victoria"
            data-attribute="fill"
            data-target="rectObj"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </section>
      <section>
        <div class="steps">
          <div>The End</div>
        </div>
      </section>
    </>
  );

  return bigSection;
};
